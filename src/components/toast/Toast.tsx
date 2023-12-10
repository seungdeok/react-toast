import React, { useEffect, useState } from 'react';
import { Itoast } from './useToast';
import { css, keyframes } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const enterAnimation = (factor: number) => keyframes`
0% {transform: translate3d(0,${factor * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

const exitAnimation = (factor: number) => keyframes`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${factor * -150}%,-1px) scale(.6); opacity:0;}
`;

// animation: ${visible && css`${enterAnimation(1)} 0.35s forwards`};
type ToastProps = {
  toast : Itoast
  removeToast: (id: string) => void;
};

const Toast = ({ toast, removeToast } : ToastProps) => {
  const [visible, setVisible] = useState(true);
  const style = css`
    animation: ${visible ? css`${enterAnimation(1)} 0.35s forwards` : css`${exitAnimation(1)} 0.4s forwards`};
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        removeToast(toast.id);
      }, 1000);
    }, toast.duration);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  return (
    <div className={`toast toast-${toast.type}`} css={style} >
      {toast.message}
    </div>
  );
};

export default Toast;
