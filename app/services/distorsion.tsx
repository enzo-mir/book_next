import { ElementRef, MouseEvent } from "react";

export const handleDragStart = (
  event: MouseEvent,
  setPosition: (value: number) => void,
  position: number,
  setDistortion: (value: number) => void,
  sliderRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<ElementRef<"section">>
) => {
  event.preventDefault();
  const maxDrag = -(sliderRef.current!.offsetWidth - containerRef.current!.offsetWidth) - 16;
  const startX = event.clientX;
  const startLeft = position;
  
  const handleDragMove = (moveEvent: MouseEvent) => {
    const deltaX = moveEvent.clientX - startX;
    if (startLeft + deltaX < maxDrag) {
      setPosition(maxDrag);
      setDistortion(0);
    } else {
      if (startLeft + deltaX > 0) {
        setPosition(0);
        setDistortion(0);
      } else {
        setPosition(startLeft + deltaX);
        if (deltaX / 10 < -10) {
          setDistortion(-10);
        } else if (deltaX / 10 > 10) {
          setDistortion(10);
        } else {
          setDistortion(deltaX / 10);
        }
      }
    }
  };

  const handleDragEnd = () => {
    setDistortion(0);
    document.removeEventListener("mousemove", handleDragMove);
    document.removeEventListener("mouseup", handleDragEnd);
  };

  document.addEventListener("mousemove", handleDragMove);
  document.addEventListener("mouseup", handleDragEnd);
};
