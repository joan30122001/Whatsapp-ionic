import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {

  readyToScan: boolean = false;
  scanning: boolean = false;

  constructor(
    private modalctrl: ModalController,
    public navCtrl: NavController,
    private qrScanner: QRScanner
    // private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  backmenu(){
    this.modalctrl.dismiss();
    // this.router.navigate(['./tab1'])
  }


  prepareScanner(): void {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          console.log("Camera permision authorized");
          this.readyToScan = true;
          this.scanning = true;
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrScanner.hide();
            scanSub.unsubscribe();
          });
        } else if (status.denied) {
          console.log("Camera permission permanently denied");
        } else {
          console.log("Camera permision temporarily denied");
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  toggleScanner(): void {
    this.scanning = !this.scanning;
    console.log("Toggled Scanner", this.scanning);
    if (this.scanning) { this.startScanning(); }
    else { this.stopScanning(); }
  }

  startScanning(): void {
    console.log("Started Scanning");
    (window.document.querySelector('html') as HTMLElement).classList.add('cameraView');
  }

  stopScanning(): void {
    console.log("Stopped Scanning");
    (window.document.querySelector('html') as HTMLElement).classList.remove('cameraView');
  }


}
