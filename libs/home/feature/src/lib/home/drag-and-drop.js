function allowDrop(even) {
  even.preventDefault();
}

let draggedElement = null;

function dragStarted(e, isTouchEvent = false) {
  let dataTransfer = isTouchEvent ? dataTransferSimulator : e.dataTransfer;
  dataTransfer.setData('text', e.target.id);
  dataTransfer.dropEffect = 'move';
  draggedElement = e.target.closest('lib-home-ui-note');
  draggedElement.style.backgroundColor = 'white';
  draggedElement.style.opacity = '0.5';
}

function drag(e, isTouchEvent = false) {
  if (!isTouchEvent) {
    e.preventDefault();
  }
  const touch = isTouchEvent ? e : null;
  const targetElement = isTouchEvent
    ? document
        .elementFromPoint(touch.clientX, touch.clientY)
        .closest('lib-home-ui-note')
    : e.target.closest('lib-home-ui-note');
  const container = document.querySelector('#notes-container');
  if (targetElement) {
    container.insertBefore(draggedElement, targetElement);
  } else {
    container.appendChild(draggedElement);
  }

  // Check if targetElement is near the edge of the container and sroll if needed
  const containerRect = container.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();
  const offset = 20;

  if (targetRect.bottom + offset >= containerRect.bottom) {
    container.scrollTop += offset;
  } else if (targetRect.top - offset <= containerRect.top) {
    container.scrollTop -= offset;
  }
}

function handleDrop(e) {
  e.stopPropagation();
  return false;
}

function dragEnd(e) {
  draggedElement.style.opacity = '1';
}
let dataTransferSimulator = {
  data: null,
  dropEffect: null,
  setData: function (type, val) {
    this.data = val;
  },
  getData: function (type) {
    return this.data;
  },
};

// Touch events
let dragStartTimer = null;
let dragStartedFlag = false;

function touchStart(e) {
  // Start a timer. If the touchend or touchmove event isn't fired within 200ms, start dragging
  dragStartTimer = setTimeout(() => {
    dragStarted(e.touches[0], true);
    dragStartedFlag = true;
  }, 200);
}

function touchMove(e) {
  // If a movement happens before the 200ms is over, clear the timer and don't start dragging
  if (dragStartTimer) {
    clearTimeout(dragStartTimer);
    dragStartTimer = null;
  }
  if (dragStartedFlag) {
    e.preventDefault();
    drag(e.touches[0], true);
  }
}

function touchEnd(e) {
  // If the touchend event is fired before the 200ms is over, clear the timer and don't start dragging
  if (dragStartTimer) {
    clearTimeout(dragStartTimer);
    dragStartTimer = null;
  }
  if (dragStartedFlag) {
    e.preventDefault();
    dragEnd(e.changedTouches[0]);
    dragStartedFlag = false;
  }
}
document.addEventListener('touchstart', touchStart, { passive: false });
document.addEventListener('touchmove', touchMove, { passive: false });
document.addEventListener('touchend', touchEnd, { passive: false });
