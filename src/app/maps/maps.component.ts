import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapGeocoder, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {


  @Input() public set locations(v: any[]) {
    if (v) {
      this._locations = v;
      this.markerPositions = v
    }
  }
  private _locations!: any[];

  public get locations(): any[] {
    return this._locations;
  }


  // infoWindow variable
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  // marker element ref variable 
  @ViewChild('markerElement', { static: false }) markerElement!: HTMLElement;

  // cluster element ref variable
  @ViewChild('cluster', { static: false }) clusterElement!: HTMLElement;

  // map element ref variable
  @ViewChild('map', { static: false }) mapElement: any;

  // searchInput element ref variable
  @ViewChild('searchPlacesInput', { static: false }) searchPlacesInputElement!: any;

  // Custom Div element ref variable
  @ViewChild('infoWindowDiv', { static: false }) infoWindowDiv!: HTMLElement;

  // autocompplete map object type
  public autocomplete: google.maps.places.Autocomplete = {} as google.maps.places.Autocomplete

  // boolen to toggle custom Info div
  public toggleInfoWindo: boolean = false

  // circle center
  // public circleCenter: google.maps.LatLngLiteral = { lat: 20.61460907947716, lng: 72.92696378260625 };

  // circleOptions object type
  public circleOptions: google.maps.CircleOptions = {}

  // mapOptions object
  public mapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
    // styles: 
    clickableIcons: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
  }
  // map zoom
  public zoom = 10;

  // custom icons device and selected Pin
  public deviceIcon = '../../assets/icons/deviceIcon.svg'
  public selectedDeviceIcon = '../../assets/icons/seletedDeviceIcon.svg'
  // marker Options default
  public markerOptions: google.maps.MarkerOptions = {};
  
  // infowindow contetnt
  public infoContent = '';
  
  // markers array
  public markerPositions: any[] = [];
  
  // marker cluster Image
  public markerClustererImagePath =
  'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  ;

  // map center
  public center: google.maps.LatLngLiteral = {
    lat: 20.5992,
    lng: 72.9342
  };
  
  // maps geocoder service
  constructor(private geocoder: MapGeocoder) {

  }
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit() {
    // binding input element to google maps Autocompete
    this.autocomplete = new google.maps.places.Autocomplete(this.searchPlacesInputElement.nativeElement)

    // directtly plce marker on place changeds on blur 
    this.autocomplete.addListener('place_changed', () => {
      this.searchPlace()
    }
    )

    /**
     * infoWindow?.closeclick event to close cutom div 
     */
    this.infoWindow?.closeclick.subscribe(() => {
      this.toggleInfoWindo = false
    })

    this.resetMarkerImage()
  }
  
  
  /**
   * @name getLocationFromLatLng
   * @param latlng 
   * @description function to get formatted address and set it to infowwindow content
  */
  getLocationFromLatLng(latlng: any) {
    this.infoContent = ''
    this.geocoder.geocode({
      location: latlng
    }).subscribe(({ results }) => {
      console.log(results);

      this.infoContent = results[0]?.formatted_address
    });

  }


  /**
   * @name searchPlace
   * @param value
   * @description funtion to add marker on button click and on place_changed event
   */
  public searchPlace() {
    let place: any = this.autocomplete.getPlace()
    console.log();
    let position: any = {
      latLng: {
        lat: place?.geometry?.location?.lat(),
        lng: place?.geometry?.location?.lng()
      }
    }
    this.addMarker(position)
  }




  /**
   * @name openInfo
   * @param marker 
   * @description function to open infoWindo and custom div ,zoom to marker and pan to marker  
   */
  openInfo(marker: MapMarker) {

    console.log(
      marker.getPosition()?.lat(), marker.getPosition()?.lng()
    )
    if (this.infoWindow != undefined) {
      this.getLocationFromLatLng(marker.marker?.getPosition())
      this.infoWindow.open(marker);
      this.toggleInfoWindo = true
      this.panAndZoomToCords(marker.marker?.getPosition(),16)
      // this.mapElement.panTo(marker.marker?.getPosition())
      // this.mapElement.googleMap.setZoom(16)
      this.resetMarkerImage()
      if (marker) {
        setTimeout(() => {
          (marker.marker?.setIcon(
            {
              url: this.selectedDeviceIcon,
              scaledSize: new google.maps.Size(40, 40), // scaled size
              origin: new google.maps.Point(0, 0), // origin
              anchor: new google.maps.Point(37, 20) // 
            }
          ));


          //  you need to set and anchor position of marker when circle is enabled

          // uncomment to enble circle on marker click

          // this.circleOptions = {
          //   radius: 500,
          //   center: marker.marker?.getPosition(),
          //   draggable: false,
          //   editable: false,
          //   fillColor: 'red',
          //   strokeColor: 'green',
          // }


        }
          ,);
      }

    }
  }

  /**
   * @name closeInfoWindow
   * @description function to close info window and custom div
   */
  closeInfoWindow() {
    if (this.infoWindow != undefined) {
      this.infoWindow.close();
    }
    this.toggleInfoWindo = false

  }




  /**
   * @name addMarker
   * @description: function to add marker
   * @comment : customize this function to use for places api
   * @param Position
   */
  addMarker(position: any) {

    // return

    //  comment this to add markers uncomment this to replace old markers
    this.markerPositions = []

    this.resetMarkerImage()
    // console.log(this.markerPositions);

    this.closeInfoWindow()
    if (position.latLng) {
      this.markerPositions.push({
        location: position.latLng
      });
      // this.mapElement.panTo({
      //   location: position.latLng
      // })
      this.panAndZoomToCords(position.latLng,16)

      setTimeout(() => {
        this.mapElement.googleMap.setZoom(16)
      }, 500);
    }

  }

  /**
   * @name resetMarkerImage
   * @description function to reset marker icon 
   */
  resetMarkerImage() {
    this.markerOptions = {
      draggable: false,
      icon: {
        url: this.deviceIcon,
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(30, 20)
      }
    };
  }


/**
 * @name panAndZoomToCords
 * @param latLng 
 * @param zoom default 16
 * @description sets map to center and zooms based on params
 */
  public panAndZoomToCords(latLng:any,zoom:number=16){
    this.mapElement.panTo(latLng)
    //  add settimeout below for smooth transion 
    this.mapElement.googleMap.setZoom(zoom)
  }
}
