import {
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Optional
} from '@angular/core';
import { RippleAnimationConfig, RippleConfig, RippleRef } from './ripple-ref';
import {RippleRenderer, RippleTarget} from './ripple-renderer';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';
import { Platform } from '@angular/cdk/platform';


export interface RippleGlobalOptions {

  disabled?: boolean;
  animation?: RippleAnimationConfig;
  terminateOnPointerUp?: boolean;
}

export const PF_RIPPLE_GLOBAL_OPTIONS = new InjectionToken<RippleGlobalOptions>(
  'pf-ripple-global-options',
);

@Directive({
  selector: '[planflex-ripple], [pfRipple], [planflexButton]',
  exportAs: 'pfRipple',
  host: {
    'class': 'pf-ripple',
    '[class.pf-ripple-unbounded]': 'unbounded',
  },
})
export class PlanflexRippleDirective implements OnInit, OnDestroy, RippleTarget {
  @Input('pfRippleColor') color: string = '';
  @Input('pfRippleUnbounded') unbounded: boolean = false;
  @Input('pfRippleCentered') centered: boolean = false;
  @Input('pfRippleRadius') radius = 0;
  @Input('pfRippleAnimation') animation: RippleAnimationConfig | any;

  @Input('pfRippleDisabled')
  get disabled() {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }

  private _disabled = false;

  @Input('matRippleTrigger')
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger: HTMLElement) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }

  private _trigger: HTMLElement | any;
  private _rippleRenderer: RippleRenderer;
  private _globalOptions: RippleGlobalOptions;
  private _isInitialized = false;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    ngZone: NgZone,
    platform: Platform,
    @Optional() @Inject(PF_RIPPLE_GLOBAL_OPTIONS) globalOptions?: RippleGlobalOptions,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private _animationMode?: string,
  ) {
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }

  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }

  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }

  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }

  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }

  get rippleConfig(): RippleConfig {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: {
        ...this._globalOptions.animation,
        ...(this._animationMode === 'NoopAnimations' ? {enterDuration: 0, exitDuration: 0} : {}),
        ...this.animation,
      },
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
    };
  }
  get rippleDisabled(): boolean {
    return this.disabled || !!this._globalOptions.disabled;
  }

  private _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }

  launch(config: RippleConfig): RippleRef;

  /**
   * Launches a manual ripple at the specified coordinates relative to the viewport.
   * @param x Coordinate along the X axis at which to fade-in the ripple. Coordinate
   *   should be relative to the viewport.
   * @param y Coordinate along the Y axis at which to fade-in the ripple. Coordinate
   *   should be relative to the viewport.
   * @param config Optional ripple configuration for the manual ripple.
   */
  launch(x: number, y: number, config?: RippleConfig): RippleRef;

  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX: number | RippleConfig, y: number = 0, config?: RippleConfig): RippleRef {
    if (typeof configOrX === 'number') {
      return this._rippleRenderer.fadeInRipple(configOrX, y, {...this.rippleConfig, ...config});
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, {...this.rippleConfig, ...configOrX});
    }
  }
}
