import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  public locations = [
    {
      id: 1,
      location: {
        lat: 20.50582874400000,
        lng: 72.926139000000
      }
    },
    {
      id: 2,
      location: {
        lat: 20.40382874400000,
        lng: 72.965239000000
      }
    },
    {
      id: 3,
      location: {
        lat: 20.302282874400000,
        lng: 72.914339000000
      }
    },
    {
      id: 4,
      location: {
        lat: 20.60412874400000,
        lng: 72.976439000000
      }
    },
    {
      id: 5,
      location: {
        lat: 20.721256453859848,
        lng: 73.00249478846563
      }
    }
    , {
      id: 6,
      location: {
        lat: 20.758501115583602,
        lng: 73.099998450575
      }
    }
    , {
      id: 7,
      location: {
        lat: 20.656377512315913,
        lng: 73.00798795252813
      }
    }
    , {
      id: 8,
      location: {
        lat: 20.70841134225744,
        lng: 73.05261991053594
      }
    }
    , {
      id: 9,
      location: {
        lat: 20.79509468952798,
        lng: 73.00867459803594
      }
    }
    , {
      id: 10,
      location: {
        lat: 20.7193297565483,
        lng: 72.93108365565313
      }
    }
    , {
      id: 11,
      location: {
        lat: 20.67308167320996,
        lng: 72.92215726405156
      }
    }
    , {
      id: 12,
      location: {
        lat: 20.745017038266802,
        lng: 72.89194486170781
      }
    }
    , {
      id: 13,
      location: {
        lat: 20.559328625786623,
        lng: 72.91529080897344
      }
    }
    , {
      id: 14,
      location: {
        lat: 20.583114532140808,
        lng: 72.94962308436406
      }
    }
    , {
      id: 15,
      location: {
        lat: 20.61460907947716,
        lng: 72.92696378260625
      }
    }
    , {
      id: 16,
      location: {
        lat: 20.63967151524598,
        lng: 72.91117093592656
      }
    }
    , {
      id: 17,
      location: {
        lat: 20.641599223963606,
        lng: 72.98532865077031
      }
    }
    , {
      id: 18,
      location: {
        lat: 20.674366532573803,
        lng: 72.94275662928594
      }
    }
    , {
      id: 19,
      location: {
        lat: 20.68849926785552,
        lng: 72.96747586756719
      }
    }
    , {
      id: 20,
      location: {
        lat: 20.656377512315913,
        lng: 73.08695218592656
      }
    }
    , {
      id: 21,
      location: {
        lat: 20.70584218927067,
        lng: 73.01348111659063
      }
    }
    , {
      id: 22,
      location: {
        lat: 20.63967151524598,
        lng: 73.02240750819219
      }
    }
    , {
      id: 23,
      location: {
        lat: 20.63581602452286,
        lng: 72.96335599452031
      }
    }
    , {
      id: 24,
      location: {
        lat: 20.619107769217095,
        lng: 73.00112149745
      }
    }
    , {
      id: 25,
      location: {
        lat: 20.600469475364076,
        lng: 72.98944852381719
      }
    }
    , {
      id: 26,
      location: {
        lat: 20.698776794040963,
        lng: 73.01962360404998
      }
    }
    , {
      id: 27,
      location: {
        lat: 20.678863454721046,
        lng: 73.05258258842498
      }
    }
    , {
      id: 28,
      location: {
        lat: 20.68849926785552,
        lng: 72.9983375933078
      }
    }
    , {
      id: 29,
      location: {
        lat: 20.678221045426874,
        lng: 72.97224506401092
      }
    }
    , {
      id: 30,
      location: {
        lat: 20.610752953941795,
        lng: 73.0752418901828
      }
    }
    , {
      id: 31,
      location: {
        lat: 20.734100476170877,
        lng: 73.24484333061248
      }
    }
    , {
      id: 32,
      location: {
        lat: 20.833604654404677,
        lng: 73.18785175346405
      }
    }
    , {
      id: 33,
      location: {
        lat: 20.863122292925365,
        lng: 73.14527973197967
      }
    }
    , {
      id: 34,
      location: {
        lat: 20.891992636685153,
        lng: 73.08210834526092
      }
    }
    , {
      id: 35,
      location: {
        lat: 20.84066374693551,
        lng: 72.86238178276092
      }
    }
    , {
      id: 36,
      location: {
        lat: 20.798946128710696,
        lng: 72.96194538139373
      }
    }
    , {
      id: 37,
      location: {
        lat: 20.80536497548124,
        lng: 72.92280658744842
      }
    }
    , {
      id: 38,
      location: {
        lat: 20.86697199263091,
        lng: 72.9928444292453
      }
    }
    , {
      id: 39,
      location: {
        lat: 20.82911233228246,
        lng: 73.12330707572967
      }
    }
    , {
      id: 40,
      location: {
        lat: 20.841947182738632,
        lng: 73.07730182670623
      }
    }
    , {
      id: 41,
      location: {
        lat: 20.70263068680243,
        lng: 73.1851051714328
      }
    }
    , {
      id: 42,
      location: {
        lat: 20.615251757575752,
        lng: 73.13635334037811
      }
    }
    , {
      id: 43,
      location: {
        lat: 20.749249471288575,
        lng: 73.09790119194061
      }
    }
    , {
      id: 44,
      location: {
        lat: 20.703652823914304,
        lng: 73.13086017631561
      }
    }
    , {
      id: 46,
      location: {
        lat: 20.758880808210808,
        lng: 73.04434284233123
      }
    }
    , {
      id: 321,
      location: {
        lat: 21.734100476170877,
        lng: 72.24484333061248
      }
    }
    , {
      id: 322,
      location: {
        lat: 21.833604654404677,
        lng: 72.18785175346405
      }
    }
    , {
      id: 323,
      location: {
        lat: 21.863122292925365,
        lng: 72.14527973197967
      }
    }
    , {
      id: 324,
      location: {
        lat: 21.891992636685153,
        lng: 72.08210834526092
      }
    }
    , {
      id: 325,
      location: {
        lat: 21.84066374693551,
        lng: 72.86238178276092
      }
    }
    , {
      id: 326,
      location: {
        lat: 21.798946128710696,
        lng: 72.96194538139373
      }
    }
    , {
      id: 327,
      location: {
        lat: 21.80536497548124,
        lng: 72.92280658744842
      }
    }
    , {
      id: 328,
      location: {
        lat: 21.86697199263091,
        lng: 72.9928444292453
      }
    }
    , {
      id: 329,
      location: {
        lat: 21.82911233228246,
        lng: 72.12330707572967
      }
    }
    , {
      id: 420,
      location: {
        lat: 21.841947182738632,
        lng: 72.07730182670623
      }
    }
    , {
      id: 421,
      location: {
        lat: 21.70263068680243,
        lng: 72.1851051714328
      }
    }
    , {
      id: 422,
      location: {
        lat: 21.615251757575752,
        lng: 72.13635334037811
      }
    }
    , {
      id: 423,
      location: {
        lat: 21.749249471288575,
        lng: 72.09790119194061
      }
    }
    , {
      id: 424,
      location: {
        lat: 21.703652823914304,
        lng: 72.13086017631561
      }
    }
    , {
      id: 426,
      location: {
        lat: 21.758880808210808,
        lng: 72.04434284233123
      }
    }
  ]


  public MapStyle =
    {
      silver: [
        {
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#616161" }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#bdbdbd" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#eeeeee" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#e5e5e5" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#dadada" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#616161" }],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ color: "#e5e5e5" }],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ color: "#eeeeee" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#c9c9c9" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }],
        },
      ],
    }
}
