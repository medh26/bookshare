import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { firstValueFrom } from "rxjs";
import { AlertComponent } from "./alert.component";

export enum AlertLevel {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface AlertConfig {
  level: AlertLevel;
  action?: string;
  icon?: string;
  onAction?: () => void;
  _config?: MatSnackBarConfig;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) {}

  error(title: string, message?: string) {
    this.alert(title, message, {level: AlertLevel.ERROR, icon: 'ri-error-warning-fill'});
  }

  warn(title: string, message?: string) {
    this.alert(title, message, {level: AlertLevel.WARN, icon: 'ri-error-warning-fill'});
  }

  success(title: string, message?: string) {
    this.alert(title, message, {level: AlertLevel.SUCCESS, icon: 'ri-checkbox-circle-fill'});
  }

  alert(title: string, message?: string, config?: AlertConfig): void {
    const _action = config?.action ? config.action : undefined;
    const _config = config?._config ? config._config : {duration: 2000}

    // const snackBarRef = this._snackBar.open(message, _action, _config);
    const snackBarRef = this._snackBar.openFromComponent(
      AlertComponent,
      {
        ..._config,
        data: {title, message, action: _action, level: config?.level, icon: config?.icon},
        panelClass: ['custom-snackbar']
      }
    );

    if (config?.onAction) {
      firstValueFrom(snackBarRef.onAction()).then( () => {
        config.onAction?.();
      });
    }
  }
}
