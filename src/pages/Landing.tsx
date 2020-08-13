import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "components/Modal";
import { NewKeyPairForm } from "components/NewKeyPairForm";
import { SignInAlbedoForm } from "components/SignIn/SignInAlbedoForm";
import { SignInLedgerForm } from "components/SignIn/SignInLedgerForm";
import { SignInLyraForm } from "components/SignIn/SignInLyraForm";
import { SignInSecretKeyForm } from "components/SignIn/SignInSecretKeyForm";
import { SignInTrezorForm } from "components/SignIn/SignInTrezorForm";

const TempLinkButtonEl = styled.div`
  margin-bottom: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

enum ModalType {
  SIGNIN_SECRET_KEY,
  SIGNIN_TREZOR,
  SIGNIN_LEDGER,
  SIGNIN_LYRA,
  SIGNIN_ALBEDO,
  NEW_KEY_PAIR,
}

export const Landing = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModal = () => {
    switch (activeModal) {
      case ModalType.SIGNIN_SECRET_KEY:
        return <SignInSecretKeyForm onClose={closeModal} />;
      case ModalType.SIGNIN_TREZOR:
        return <SignInTrezorForm onClose={closeModal} />;
      case ModalType.SIGNIN_LEDGER:
        return <SignInLedgerForm />;
      case ModalType.SIGNIN_LYRA:
        return <SignInLyraForm onClose={closeModal} />;
      case ModalType.SIGNIN_ALBEDO:
        return <SignInAlbedoForm onClose={closeModal} />;
      case ModalType.NEW_KEY_PAIR:
        return <NewKeyPairForm onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Stellar Account Viewer</h1>

      <h2>Sign in with a wallet</h2>
      <TempLinkButtonEl onClick={() => openModal(ModalType.SIGNIN_LEDGER)}>
        Sign in with Ledger
      </TempLinkButtonEl>
      <TempLinkButtonEl onClick={() => openModal(ModalType.SIGNIN_TREZOR)}>
        Sign in with Trezor
      </TempLinkButtonEl>
      <TempLinkButtonEl onClick={() => openModal(ModalType.SIGNIN_LYRA)}>
        Sign in with Lyra
      </TempLinkButtonEl>
      <TempLinkButtonEl onClick={() => openModal(ModalType.SIGNIN_ALBEDO)}>
        Sign in with Albedo
      </TempLinkButtonEl>

      <h2>Other authentication methods</h2>
      <TempLinkButtonEl onClick={() => openModal(ModalType.SIGNIN_SECRET_KEY)}>
        Sign in using a Secret Key
      </TempLinkButtonEl>

      <TempLinkButtonEl onClick={() => openModal(ModalType.NEW_KEY_PAIR)}>
        Generate key pair for a new account
      </TempLinkButtonEl>

      <Modal visible={activeModal !== null} onClose={closeModal}>
        {renderModal()}
      </Modal>
    </div>
  );
};
