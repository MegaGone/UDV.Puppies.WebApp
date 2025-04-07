import Swal from 'sweetalert2';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPuppy } from '../../interfaces/puppy.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
  imports: [MatCardModule, MatButtonModule],
})
export class CardComponent {
  @Input() puppy!: Partial<IPuppy> | null;

  public like(name: string): void {
    console.log(`El usuario le ha dado like al perro de nombre: ${name}`);

    Swal.fire({
      icon: 'info',
      title: '¿Te ha gustado este perro?',
      text: `Parece que te ha gustado este perro: ${name}`,
    });
  }

  public adopt(name: string): void {
    console.log(`El usuario está interesado en adoptar a este perro: ${name}`);

    Swal.fire({
      icon: 'info',
      title: '!Gracias por tu interés!',
      text: `Parece que te quieres adoptar a este perro: ${name}`,
    });
  }
}
