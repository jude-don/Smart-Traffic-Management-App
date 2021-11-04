import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Chart, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userEmail: string;

  @ViewChild('barChart',{static: true}) barChart;
  bars: any;
  colorArray:any;

  // public items: Array<any> = [];
  // items:any;
  // Lane1: any;
  // Lane2: any;
  // TT_Lane1: any;
  // TT_Lane2:any;

  // Data
  chartData: ChartDataSets[] = [
    {data: [], label: 'Traffic chart'} ];
  chartLabels: Label[];

// Options
// chartOptions = {
//   responsive: true,
//   title: {
//     display:true,
//     text: 'Road traffic congestion'
//   },
//   pan: {
//     enabled: true,
//     mode: 'xy'
//   },
//   zoom:{
//     enabled: false,
//     mode: 'xy'
//   }
// };
// chartColors: Color[] = [
//   {
//     borderColor: '#000000',
//     backgroundColor:'#ff00ff'
//   }
// ];
// chartType = 'line';
// showLegend = false;
// // For search
// stock = '';

public customers=[];

  constructor(
    private navCtrl: NavController,  
    private authService: AuthenticationService,
    private http: HttpClient,
    public apiService: ApiService,
    public router: Router,
    ) { }
  

  
    ionViewDidEnter(){
      this.createBarChart()
    }
    createBarChart(){
      this.bars = new Chart(this.barChart.nativeElement,{
        type: 'line',
        data:{
          labels: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm'],
          datasets:[{
            label: 'Traffic congestion',
            data: [50,60,35,20,15,15,10,25,30,35,37,48,60,54,40,30,16],
            backgroundColor: 'rgb(246, 16, 16)',
            borderColor: 'rgb(246,16,16)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes:[{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
   

  goToCustomers(){
  this.router.navigate(['/customers'])
  }

  goToCustomersDetails(){
    this.router.navigate(['customerdetails'])
  }
  // getData() {
  //     this.http.get('https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12').subscribe(res => {
  //     const history = res['historical'];
 
  //     this.chartLabels = [];
  //     this.chartData[0].data = [];
 
  //     for (let entry of history) {
  //       this.chartLabels.push(entry.date);
  //       this.chartData[0].data.push(entry['close']);
  //     }
  //     console.log('data: ',this.chartData); 
  //   });
  // }


  ngOnInit() {
  

    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      this.apiService.getData().subscribe(data =>{
        console.log(data)
        this.customers = data;
  
      })
    }
    else{
      this.navCtrl.navigateBack('');
    }
    
  }
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}
