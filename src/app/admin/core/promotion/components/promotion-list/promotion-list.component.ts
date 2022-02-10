import { Component, Inject, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';


@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css'],
})
export class PromotionListComponent implements OnInit, AfterViewInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "dark";


  columns: string[] = [
    "id",
    "titre",
    "description",
    "dateDebut",
    "dateFin",
    "prix",
    "action",
  ];

  constructor(
    public promotionService: PromotionService,
  ) {}



  ngAfterViewInit(): void {
    // this.promotionService.dataSource.sort = this.sort;
    // this.promotionService.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.promotionService.getAllPromotions();
  }

  applyFilter(event:any) {
    console.log("call filter" + JSON.stringify(event));
    const filterVlaue = (event.target as HTMLInputElement).value;
    // this.promotionService.dataSource.filter = filterVlaue.trim().toLowerCase();
  }

  deletePromotion(element: any) {
    this.promotionService.deletePromotion(element.id).subscribe((res: any) => {
      if (res && res.success) {
        this.promotionService.getAllPromotions();
        // this.toastr.success(res.message);
        alert(res.message);
      } else {
        // this.toastr.error(res.message);
        alert(res.message);
      }
    });
  }

  // editPromotion(element: any) {
  //   this.dialogRef = this.dialog.open(PromotionFormComponent, {
  //     width: "700px",
  //     data: { type: "edit_moment", obj: element },
  //     disableClose: true,
  //     autoFocus: true,
  //   });

  //   this.dialogRef.afterClosed().subscribe((result) => {
  //     this.promotionService.getAllPromotions();
  //     console.log("result", result);
  //   });
  // }

}

