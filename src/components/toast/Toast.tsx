import React, { useEffect, useState } from 'react';
import { Itoast, ToastPosition } from './useToast';
import { css, keyframes } from "@emotion/react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
/** @jsxImportSource @emotion/react */

// const slideInCenterTop = (factor: number) => keyframes`
// 0% {transform: translate3d(0,${factor * -200}%,0) scale(.6); opacity:.5;}
// 100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
// `;

// const slideOutCenter = (factor: number) => keyframes`
// 0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
// 100% {transform: translate3d(0,${factor * -150}%,-1px) scale(.6); opacity:0;}
// `;

const slideInCenterTop = keyframes`
0% {transform: translate3d(0,-200%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

const slideOutCenterTop = keyframes`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,-150%,-1px) scale(.6); opacity:0;}
`;

const slideInCenterBottom = keyframes`
0% {transform: translate3d(0,200%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

const slideOutCenterBottom = keyframes`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,150%,-1px) scale(.6); opacity:0;}
`;

const slideInRight = keyframes`
0% {transform: translate3d(110%, 0, 0);}
80% {transform: translate3d(-10%, 0, 0);}
100% {transform: translate3d(0, 0, 0);}
`

const slideInLeft = keyframes`
0% {transform: translate3d(-110%, 0, 0);}
80% {transform: translate3d(10%, 0, 0);}
100% {transform: translate3d(0, 0, 0);}
`

const slideOutRight = keyframes`
0% {transform: translate3d(0, 0, 0);}
20% {transform: translate3d(-10%, 0, 0);}
100% {transform: translate3d(110%, 0, 0);}
`;

const slideOutLeft = keyframes`
0% {transform: translate3d(0, 0, 0);}
20% {transform: translate3d(10%, 0, 0);}
100% {transform: translate3d(-110%, 0, 0);}
`;


type ToastProps = {
  toast : Itoast
  removeToast: (id: string) => void;
};

const getAnimation = (toastPosition: ToastPosition) => {
    switch (toastPosition) {
        case 'top-left':
        case 'bottom-left':
            return [slideInLeft, slideOutLeft];
        case 'top-center':
            return [slideInCenterTop, slideOutCenterTop];
        case 'bottom-center':
            return [slideInCenterBottom, slideOutCenterBottom];
        case 'top-right':
        case 'bottom-right':
            return [slideInRight, slideOutRight];
        
        default:
            console.log("Invalid Position: ", toastPosition);
            return [];
    }
}

const iconTypes = {
    success: { icon: CheckCircleIcon, className: 'check-circle-success' },
    error: { icon: ErrorIcon, className: 'check-circle-error' },
    info: { icon: InfoIcon, className: 'check-circle-info' },
    loading: { icon: AutorenewIcon, className: 'check-circle-load' },
};

// animation: ${visible && css`${toastAnimation[0]} 0.35s forwards`};
// animation: ${visible ? css`${toastAnimation[0]} 0.35s forwards` : css`${toastAnimation[1]} 0.4s forwards`};
const Toast = ({ toast, removeToast } : ToastProps) => {
  const [visible, setVisible] = useState(true);
  const toastAnimation = getAnimation(toast.position);
  const { icon: IconComponent, className: iconClassName } = iconTypes[toast.type];
  const style = css`
    animation: ${visible ? css`${toastAnimation[0]} 0.35s forwards` : css`${toastAnimation[1]} 0.4s forwards`};
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
        <IconComponent className={iconClassName} />
        <div className='toast-icon'></div>
        <p className='toast-message'>{toast.message}</p>
    </div>
  );
};

export default Toast;