// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseUrl: 'https://theapsu.github.io/cuentos',
  baseUrl: '/assets/db',

  cuentosUrl: 'https://theapsu.github.io/cuentos',

  // apiUrl: 'http://localhost:3000',
  apiUrl: 'https://nodejs-railway-server.onrender.com',

  paypalKey:
    'AUUmKM0vHKSy4rHAxKFaUti0btItQbLpw6GC2CNGnX__eXqeE896gUaV0cv2I9B-qldP6Xa7QhSf-RAJ',
  // paypalKey:
  //   'AepZr9uiwtcTOVyqrx5zdokXhvt3hiRdLUhY1A81N6lWiA8kkOOI-7K-JgaKGZ8D2Wgi9Sb-vehGlcKA',
  paypalSecretKey:
    'EJDfqoMh3sBxS0bkYSC2nF7uNAkVP26ZO32nU5ApBzWTOOHosfBcC6R2j9mgmBaHxU8IMDzSg949eT9Q',

  paypalPlan: 'P-6JU57210X6245764KMU2BNAA',
  accessToken:
    'A21AALl2zBcjAq7b0bquHKG6kkdWqYiRtJ0HpQHGeW-wz5DXio1WNiHzk6_FOrNiuy3HSPMYROK30S2Rttn32EdWgRQeCXt4w',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
