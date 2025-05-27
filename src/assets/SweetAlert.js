import Swal from 'sweetalert2'

export function AlertasSweets (texto, icono, btn, footer){
Swal.fire({
  text: texto,
  icon: icono,
  confirmButtonText: btn,
  footer: footer,
  
})
}

export function AlertasSweets2 (texto, icono, btn){
Swal.fire({
  text: texto,
  icon: icono,
  confirmButtonText: btn,
})
}
