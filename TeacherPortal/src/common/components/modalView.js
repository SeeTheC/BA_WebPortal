// @flow
import * as React from 'react';
import Modal from 'react-responsive-modal';

type Props = {
  onCloseModal: Function,
  open: any,
  children: React.Node
};

const ModalView = (props: Props) => {
  const { open, onCloseModal, children } = props;
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      {children}
    </Modal>
  );
};

export default ModalView;
