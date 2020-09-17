import anime from "animejs";

export class AnimationTimeline {
  private readonly timeline;

  constructor(easing: string) {
    this.timeline = anime.timeline({
      easing: easing,
    });
  }

  addFadeIn(cssClass: string, translateY: number, duration: number): this {
    this.timeline.add({
      targets: `.${cssClass}`,
      translateY: [translateY, 0],
      opacity: [0, 1],
      duration: duration,
    });

    return this;
  }

  getTimeline(): DocumentTimeline {
    return this.timeline;
  }
}

export function scaleAnimation(scale: number, cssClass: string): void {
  anime({
    targets: `.${cssClass}`,
    scale: scale,
  });
}
