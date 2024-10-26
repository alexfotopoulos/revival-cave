import styles from "./HeadShot.module.scss";

export default function HeadShot(props) {
  let imageBottom = props.pushImageUp ? "bottom" : ""

  return (
    <a href={`/about/${props.slug}`}>
    <div
      className={styles.HeadShot}
      style={{ backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)), url(${props.image})`, backgroundPosition: `${imageBottom}` }}>
      <p className={styles.HeadShotImageName}>{props.name}</p>
    </div>
    </a>
  );
}