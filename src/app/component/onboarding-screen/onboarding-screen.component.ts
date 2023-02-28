import { Component, Output } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-onboarding-screen',
  templateUrl: './onboarding-screen.component.html',
  styleUrls: ['./onboarding-screen.component.css']
})
export class OnboardingScreenComponent {

  username: string = '';

  valueSelected: number = 0;
  firstPages: boolean = true;

  constructor(private profileS: ProfileService) { }

  next() {
    if (this.valueSelected === 0)
      this.addUsername();
    if (this.valueSelected < 3)
      this.valueSelected++;
    if (this.valueSelected === 3)
      this.firstPages = false;
  }

  back() {
    if (this.valueSelected > 0)
      this.valueSelected--;
    if (this.valueSelected != 3)
      this.firstPages = true;
  }

  addUsername() {
    this.profileS.addUsername(this.username);
  }

}
