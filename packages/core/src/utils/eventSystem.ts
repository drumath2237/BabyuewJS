export class EventSystemVoid {
  private readonly eventTarget: EventTarget;
  private readonly eventName: string;

  constructor() {
    this.eventTarget = new EventTarget();
    this.eventName = "eventSystemVoid";
  }

  public addListener(listner: () => void) {
    this.eventTarget.addEventListener(this.eventName, listner);
  }

  public removeListener(listener: () => void) {
    this.eventTarget.removeEventListener(this.eventName, listener);
  }

  public notify() {
    this.eventTarget.dispatchEvent(new Event(this.eventName));
  }
}

export class EventSystem<T> {
  eventTarget: EventTarget;
  eventName: string;

  constructor() {
    this.eventTarget = new EventTarget();
    this.eventName = "eventSystem";
  }

  public addListener(listner: (ev: CustomEvent<T>) => void) {
    this.eventTarget.addEventListener(
      this.eventName,
      listner as EventListenerOrEventListenerObject,
    );
  }

  public removeListener(listener: (ev: CustomEvent<T>) => void) {
    this.eventTarget.removeEventListener(
      this.eventName,
      listener as EventListenerOrEventListenerObject,
    );
  }

  public notify(obj: T) {
    this.eventTarget.dispatchEvent(
      new CustomEvent<T>(this.eventName, { detail: obj }),
    );
  }
}
