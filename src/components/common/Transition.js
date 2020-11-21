/*
 *     MC.fmly Inventory System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// @ts-ignore
import { spring } from 'react-router-transition';

/*
 *
 * This is only a transition when navigating routes/pages.
 * Therefore NOT a component.
 *
 */

export const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
};

// ? wrap the `spring` helper to use a bouncy config
const bounce = (val) => {
  return spring(val, {
    stiffness: 200,
    damping: 30
  });
};

export const bounceTransition = {
  // ? tart in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 0.95
  },
  // ? leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.9)
  },
  // ? and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};