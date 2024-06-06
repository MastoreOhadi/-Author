import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorArticleComponent } from './author-article.component';

describe('AuthrArticleComponent', () => {
  let component: AuthorArticleComponent;
  let fixture: ComponentFixture<AuthorArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
