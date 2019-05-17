import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { DriverService } from './driver.service';
import { ActivatedRoute } from '@angular/router';
import { Distance } from '../user/distance';
import { UserService } from '../user/user.service';
import { BookRide } from '../user/bookRide';



@Component({
    templateUrl: "./driver-notification.component.html",
    selector: "driver-notification",
    styleUrls: ['./driver-welcome.component.css']
})
export class DriverNotificationComponent implements OnInit {
    user: User;
    distance: Distance;
    bookRide:BookRide;

    pickUpAt:string;
    dropAt:string;
    constructor(private driverService: DriverService, private route: ActivatedRoute, private userService: UserService) { }

    ngOnInit() {

        // this.bookRide = JSON.parse(sessionStorage.getItem("bookride"))

this.pickUpAt = sessionStorage.getItem("pickUpAt");
this.dropAt = sessionStorage.getItem("dropAt");
 
        console.log(this.distance)
        this.driverService.getDetailsOfUser().subscribe((data) => {
            this.user = data;
            console.log(data);
        })
    }
}