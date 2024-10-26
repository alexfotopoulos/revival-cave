import styles from "./HeadShot.module.scss";
import Image from "next/image";

export default function HeadShot(props) {
  let imageBottom = props.pushImageUp ? "bottom" : "";
  return (
    <a href={`/about/${props.slug}`}>
      <div className={styles.HeadShot}>
        <Image
          src={props.image}
          fill={true}
          objectFit="cover"
          className={styles.HeadShotImage}
          alt={`photo of ${props.name}`}
          priority
          style={{objectPosition: props.pushImageUp ? "bottom" : "top"}}
        />
        <p className={styles.HeadShotImageName}>{props.name}</p>
      </div>
    </a>
  );
}