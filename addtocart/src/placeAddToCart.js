import { render } from "solid-js/web";

export default function placeAddToCart(el, id) {
  render(() => <AddToCart id={id} />, el);
}
