import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Dvd } from '../../../models/dvd.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dvd-details',
  templateUrl: './dvd-details.component.html',
  styleUrl: './dvd-details.component.scss',
})
export class DvdDetailsComponent implements OnInit {
  model: Dvd = {
    title: '',
    director: ''
  };

  id: number | undefined = undefined;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  dvds: Dvd[] = []
  ngOnInit(): void {
    this.route?.params?.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.get(this.id);
      }
    });

    this.getAllDvds();
  }

  getAllDvds(){
    this.apiService.GetAllDvds().subscribe({
      next: (response) => {
        this.dvds= response;
      },

      error: (error)=> {
        console.error(error);
      },

    });
  }

  get(id: number) {
    this.apiService.GetDvd(id).subscribe({
      next: (response: Dvd) => {
        this.model = response;
      },
      error: (error) => console.error(error),
    });
  }

  save() {
    if (!this.id)
      this.apiService
        .CreateDvd(this.model)
        .subscribe({ complete: () => this.router.navigateByUrl('/dvds') });
    else this.apiService.UpdateDvd(this.model).subscribe();
  }
}
