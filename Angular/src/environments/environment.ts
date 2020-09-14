// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  DEFAULTCREDITVALUE: 100000,
  MINVALUE: 100000,
  MAXVALUE: 1000000,
  DENIED: 'Su solicitud fue negada, verifique su moto disponible o llamenos al +57(1)6331409',
  APPROVAL: 'Su solicitud fue aprobada con èxito',
  NOCREDIT: 'Lo sentimos su saldo disponible es 0',
  AMOUNTCREDIT: 'Su saldo disponible es: ',
  ZERO: 0,
  BEATS: 'El valor solicitado supera el saldo disponible, intentelo de nuevo',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
