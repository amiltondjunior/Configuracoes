import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Config.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:81 */
export const Config: FC<Props> = memo(function Config(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes._2639919CartShopping4}></div>
      <div className={classes._2639919CartShopping3}></div>
      <div className={classes._2639919CartShopping2}></div>
      <div className={classes._2639919CartShopping1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack2}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes.configuracoes}>Configurações</div>
      <div className={classes.servidor}>Servidor</div>
      <div className={classes.line2}></div>
    </div>
  );
});
