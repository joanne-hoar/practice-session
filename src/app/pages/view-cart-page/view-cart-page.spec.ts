import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCartPage } from './view-cart-page';
import { CartService } from '../../services/cart-service';

describe('ViewCartPage', () => {
  let component: ViewCartPage;
  let fixture: ComponentFixture<ViewCartPage>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCartPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCartPage);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item from cart', () => {
    const mockProduct = { id: 1, name: 'Test', image: 'test.jpg' };
    cartService.addToCart(mockProduct);
    
    component.removeItem(0);
    
    expect(cartService.items().length).toBe(0);
  });

  it('should clear all items with confirmation', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const mockProduct = { id: 1, name: 'Test', image: 'test.jpg' };
    cartService.addToCart(mockProduct);
    
    component.clearAll();
    
    expect(cartService.items().length).toBe(0);
  });

  it('should not clear items if confirmation is cancelled', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const mockProduct = { id: 1, name: 'Test', image: 'test.jpg' };
    cartService.addToCart(mockProduct);
    
    component.clearAll();
    
    expect(cartService.items().length).toBe(1);
  });
});
