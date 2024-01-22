/*
 * @Date: 2023-12-19 22:02:19
 * @Description: Using delayed switching
 */
import { tryOnScopeDispose } from "@fish-bubble-design/shared";

type UseDelayedToggleProps = {
  open: (event?: Event) => void;
  close: (event?: Event) => void;
  hideAfterTime?: number;
  showAfterTime?: number;
};

const usePopperTimeout = () => {
  let timeoutHandle: number;

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    // Clear the timer first
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);

  // This callback function is called when the relevant effect scope stops.
  tryOnScopeDispose(() => cancelTimeout());

  return {
    registerTimeout,
    cancelTimeout
  };
};

export const useDelayedToggle = ({ open, close, hideAfterTime, showAfterTime }: UseDelayedToggleProps) => {
  const { registerTimeout } = usePopperTimeout();

  const options = { showAfterTime: showAfterTime || 0, hideAfterTime: hideAfterTime ?? 200 };
  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event);
    }, options.showAfterTime);
  };

  const onClose = (event?: Event) => {
    registerTimeout(() => {
      close(event);
    }, options.hideAfterTime);
  };

  return {
    onOpen,
    onClose
  };
};
