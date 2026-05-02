import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Para @if y @for

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Importamos utilidades básicas
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private readonly API_URL = 'https://detecciontumoresangular.onrender.com/';

  image: File | null = null;
  prediction = '';
  imageName = '';
  probs: Record<string, number> | null = null;
  previewUrl: string | null = null; // Para mostrar la imagen apenas la adjuntas

  constructor(private http: HttpClient) {}

  handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.image = file;
      this.prediction = '';
      this.imageName = '';
      this.probs = null;

      // Generar una URL de vista previa local
      const reader = new FileReader();
      reader.onload = (e) => this.previewUrl = e.target?.result as string;
      reader.readAsDataURL(file);

      // Lanzar el análisis automáticamente sin borrar los botones
      this.handleSubmit(new Event('submit'));
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.image) return;

    const formData = new FormData();
    formData.append('image', this.image);

    this.http.post<any>(`${this.API_URL}/api/clasificar`, formData).subscribe({
      next: (data) => {
        this.prediction = data.prediction;
        this.imageName = data.image_name;
        this.probs = data.probs;
      },
      error: (err) => {
        alert('Error al clasificar la imagen');
        console.error(err);
      }
    });
  }

  get imageUrl() {
    return this.previewUrl || (this.imageName ? `${this.API_URL}/static/uploads/${this.imageName}` : '');
  }

  get graphUrl() {
    return this.imageName 
      ? `${this.API_URL}/static/uploads/probabilidades.png?t=${new Date().getTime()}` 
      : '';
  }

  get probsEntries() {
    return this.probs ? Object.entries(this.probs) : [];
  }
}