import { MouseEvent, RefObject } from "react";

export const handleDragStart = (
  event: MouseEvent,
  setPosition: (value: number) => void,
  position: number,
  sliderRef: RefObject<HTMLDivElement | null>,
  containerRef: RefObject<HTMLElement | null>,
) => {
  event.preventDefault();
  if (!sliderRef.current || !containerRef.current) return;

  const maxDrag =
    -sliderRef.current?.offsetWidth + containerRef.current?.offsetWidth - 16;

  const startX = event.clientX;
  const startLeft = position;

  const handleDragMove = (moveEvent: Event) => {
    const deltaX = (moveEvent as unknown as MouseEvent).clientX - startX;
    if (startLeft + deltaX < maxDrag) {
      setPosition(maxDrag);
    } else {
      if (startLeft + deltaX > 0) {
        setPosition(0);
      } else {
        setPosition(startLeft + deltaX);
      }
    }
  };

  const handleDragEnd = () => {
    sliderRef.current!.removeEventListener("mousemove", handleDragMove);
    sliderRef.current!.removeEventListener("mouseup", handleDragEnd);
  };

  sliderRef.current.addEventListener("mousemove", handleDragMove);
  sliderRef.current!.addEventListener("mouseup", handleDragEnd);
};
