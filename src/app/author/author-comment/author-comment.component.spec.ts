import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCommentComponent } from './author-comment.component';

describe('AuthrCommentComponent', () => {
  let component: AuthorCommentComponent;
  let fixture: ComponentFixture<AuthorCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
