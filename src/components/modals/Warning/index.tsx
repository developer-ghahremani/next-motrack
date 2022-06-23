import { useAppDispatch, useAppSelector } from "store";

import { IButton } from "components/general";
import Popup from "reactjs-popup";
import React from "react";
import { toggleWarningModal } from "store/modals";
import { useI18Next } from "i18n";

const WarningModal = () => {
  const { warning } = useAppSelector((s) => s.modals);
  const dispatch = useAppDispatch();
  const { t } = useI18Next();

  const handleClose = () => {
    dispatch(toggleWarningModal({ open: false, message: "" }));
  };

  const handleOk = () => {
    dispatch(toggleWarningModal({ open: false, message: "" }));
    setTimeout(() => {
      warning.onOK && warning.onOK();
    }, 500);
  };

  return (
    <Popup
      closeOnEscape
      contentStyle={{
        width: "35%",
        padding: 0,
        border: "none",
      }}
      modal
      open={warning.open}
      onClose={handleClose}>
      <div className="flex flex-col items-center py-8">
        <p>{warning.message}</p>
        <div className="flex justify-center mt-8">
          <IButton
            className="px-10 py-2 ml-2 !bg-red-600 rounded-lg"
            onClick={handleClose}>
            {t("general.no")}
          </IButton>
          <IButton className="px-5 py-2 mr-2 rounded-lg" onClick={handleOk}>
            {t("general.yes")}
          </IButton>
        </div>
      </div>
    </Popup>
  );
};

export default WarningModal;
