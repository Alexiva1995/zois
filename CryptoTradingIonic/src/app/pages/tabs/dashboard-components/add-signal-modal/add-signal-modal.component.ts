import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-signal-modal',
  templateUrl: './add-signal-modal.component.html',
  styleUrls: ['./add-signal-modal.component.scss'],
})
export class AddSignalModalComponent {
  @Output() onClose = new EventEmitter<void>();
  @Output() signalAdded = new EventEmitter<any>();

  signalForm: FormGroup;
  // uploadedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  constructor(
    private fb: FormBuilder,
    private toastController: ToastController
  ) {
    this.signalForm = this.fb.group({
      name: ['', [Validators.required]],
      buyLimit: [null, [Validators.required]],
      sellLimit: [null, [Validators.required]],
      buyStop: [null, [Validators.required]],
      sellStop: [null, [Validators.required]],
      stopLoss: [null, [Validators.required]],
      takeProfit: [null, [Validators.required]],
      instructions: [''],
    });
  }
  closeModal() {
    this.onClose.emit();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string | ArrayBuffer;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor selecciona un archivo de imagen.');
    }
  }

  async submit() {
    if (this.signalForm.invalid) {
      const toast = await this.toastController.create({
        message: 'Por favor completa todos los campos requeridos.',
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
      return;
    }

    const signalData = {
      ...this.signalForm.value,
      image: this.imagePreview,
    };
    this.signalAdded.emit(signalData);
    this.signalForm.reset();
  }
}
