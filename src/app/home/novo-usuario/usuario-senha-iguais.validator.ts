import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value as string ?? ''
  const password = formGroup.get('password')?.value as string ?? ''

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true }
  } else {
    return null
  }
}
