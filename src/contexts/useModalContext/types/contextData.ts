import { ModalRef } from './modalRef'

export type ModalContextData = {
  openModal: (modalRef: React.RefObject<ModalRef>) => void
  closeModal: () => void
}
