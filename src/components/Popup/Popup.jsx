import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import "./Popup.scss";

const Popup = ({ show, onClose, suite }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const dialogRef = useRef(null);
  const contentRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  const imageCount = suite?.images?.length ?? 0;
  const showPrevious = () => setImageIndex((index) => (index - 1 + imageCount) % imageCount);
  const showNext = () => setImageIndex((index) => (index + 1) % imageCount);

  useEffect(() => setImageIndex(0), [suite, show]);

  useEffect(() => {
    if (!show) return undefined;
    returnFocusRef.current = document.activeElement;
    document.body.classList.add("dialog-open");
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && imageCount > 1) showPrevious();
      if (event.key === "ArrowRight" && imageCount > 1) showNext();

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusRef.current?.focus?.();
    };
  }, [show, imageCount, onClose]);

  if (!show || !suite) return null;

  const handleDialogWheel = (event) => {
    const isDesktop = window.matchMedia("(min-width: 52.01rem)").matches;
    const isOverDetails = event.target.closest(".suite-dialog__content");
    if (isDesktop && !isOverDetails && contentRef.current && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      contentRef.current.scrollTop += event.deltaY;
    }
  };

  return (
    <div className="suite-dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        className="suite-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="suite-dialog-title"
        onWheel={handleDialogWheel}
      >
        <button ref={closeRef} className="suite-dialog__close" type="button" onClick={onClose} aria-label="Close suite details">
          <X aria-hidden="true" />
        </button>

        <div className="suite-dialog__gallery">
          <div
            className="suite-dialog__stage"
            style={{ "--gallery-image": `url("${suite.images[imageIndex]}")` }}
          >
            <img
              className="suite-dialog__image"
              src={suite.images[imageIndex]}
              alt={`${suite.name} suite, image ${imageIndex + 1} of ${imageCount}`}
            />
          </div>
          <div className="suite-dialog__gallery-bar">
            <p>{String(imageIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</p>
            <span className="suite-dialog__scroll-hint">Scroll for suite details</span>
            {imageCount > 1 && (
              <div className="suite-dialog__gallery-actions">
                <button type="button" onClick={showPrevious}>Previous</button>
                <button type="button" onClick={showNext}>Next</button>
              </div>
            )}
          </div>
          <div className="suite-dialog__thumbnails" aria-label={`${suite.name} photo gallery`}>
            {suite.images.map((image, index) => (
              <button
                className={index === imageIndex ? "is-current" : ""}
                type="button"
                key={image}
                aria-label={`Show ${suite.name} image ${index + 1} of ${imageCount}`}
                aria-current={index === imageIndex ? "true" : undefined}
                onClick={() => setImageIndex(index)}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <div className="suite-dialog__content" ref={contentRef}>
          <p className="eyebrow">Delamore Cove suite</p>
          <h2 id="suite-dialog-title">{suite.name}</h2>
          <p className="suite-dialog__setting">{suite.setting}</p>
          <p className="suite-dialog__description">{suite.description}</p>

          <dl className="suite-dialog__facts">
            <div><dt>Sleeps</dt><dd>{suite.sleep}</dd></div>
            <div><dt>Bed</dt><dd>{suite.bed}</dd></div>
          </dl>

          <div className="suite-dialog__amenities">
            <h3>Included in your stay</h3>
            <ul>{suite.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul>
          </div>

          <a className="button suite-dialog__book" href={suite.href} target="_blank" rel="noopener noreferrer">
            Check {suite.name} availability
          </a>
          <p className="suite-dialog__booking-note">Secure booking managed by Be My Guest Waiheke</p>
        </div>
      </section>
    </div>
  );
};

export default Popup;
