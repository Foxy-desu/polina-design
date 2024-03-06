import React, { useEffect, useState } from "react";
import styles from "./atmosphere-section.module.scss";
import { SectionHeader } from "../UI/section-header/section-header";
import { InformationBlock } from "../UI/information-block/information-block";
import { PhotoFrame } from "../UI/photo-frame/photo-frame";
import { AtmosphereCard } from "./atmosphere-card/atmosphere-card";

const AtmosphereHeader = ({ header }) => {
  return (
    <div className={styles["atmosphere__header"]}>
      <SectionHeader content={header.content} type={header.type} />
    </div>
  );
};
const AtmosphereVibeBlock = ({ vibeInfocard, renderCards, vibeCards }) => {
  return (
    <div className={styles["atmosphere__vibe-block"]}>
      <div className={styles["vibe-block__desc-wrap"]}>
        <InformationBlock
          heading={vibeInfocard.heading}
          description={vibeInfocard.description}
        />
      </div>
      <div className={styles["vibe-block__cards"]}>
        {renderCards(vibeCards)}
      </div>
    </div>
  );
};
const OutstandBlock = ({
  renderCards,
  outstandUpperCards,
  outstandInfocard,
  outstandLowerCards,
  block,
  largeImages,
}) => {
  return (
    <div className={styles["atmosphere__outstand-block"]}>
      <div className={styles["outstand-block__plain-cards"]}>
        <div
          className={`${styles["plain-cards__images"]} ${styles["upper-images"]}`}
        >
          {renderCards(outstandUpperCards)}
        </div>
        <div className={styles["plain-cards__desc-wrap"]}>
          <InformationBlock
            heading={outstandInfocard.heading}
            description={outstandInfocard.description}
          />
        </div>
        <div
          className={`${styles["plain-cards__images"]} ${styles["lower-images"]}`}
        >
          {renderCards(outstandLowerCards)}
        </div>
      </div>
      {block === "detailed" ? (
        <div className={styles["outstand-block__large-examples"]}>
          <div
            className={`${styles["large-examples__card-wrap"]} ${styles["plain-card-wrap"]}`}
          >
            <PhotoFrame
              path={largeImages[0].path}
              info={largeImages[0].info}
              type={largeImages[0].type}
            />
          </div>
          <div
            className={`${styles["large-examples__card-wrap"]} ${styles["designed-card-wrap"]}`}
          >
            <PhotoFrame
              path={largeImages[1].path}
              info={largeImages[1].info}
              type={largeImages[1].type}
            />
          </div>
        </div>
      ) : (
        <div className={`${styles["outstand-block__compact"]}`}>
          {renderCards(largeImages)}
        </div>
      )}
    </div>
  );
};

export const AtmosphereSection = ({ atmosphereData }) => {
  const header = atmosphereData.sectionHeading;
  const vibeInfocard = atmosphereData.vibeBlock.description;
  const vibeCards = atmosphereData.vibeBlock.cards;
  const outstandInfocard = atmosphereData.outstandBlock.description;
  const outstandUpperCards = atmosphereData.outstandBlock.cards.upperBlock;
  const outstandLowerCards = atmosphereData.outstandBlock.cards.lowerBlock;
  const largeImages = atmosphereData.lgExampleBlock;
  const breakpoint = 840;
  const viewportWidth = window.innerWidth;

  const [block, setBlock] = useState(() => {
    return viewportWidth > breakpoint ? "detailed" : "compact";
  });

  useEffect(() => {
    function resizeHandler() {
      if (window.innerWidth > breakpoint) {
        setBlock("detailed");
      } else setBlock("compact");
    }

    console.log(block);

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [viewportWidth]);

  function renderCards(cards) {
    return cards.map((card) => {
      return (
        <div key={card.id} className={styles["card-wrap"]}>
          <AtmosphereCard path={card.path} info={card.info} />
        </div>
      );
    });
  }

  return (
    <section className={styles["atmosphere"]} id="atmosphere">
      <div className={styles["content-wrap"]}>
        <AtmosphereHeader header={header} />
        <AtmosphereVibeBlock
          vibeInfocard={vibeInfocard}
          renderCards={renderCards}
          vibeCards={vibeCards}
        />
        <OutstandBlock
          renderCards={renderCards}
          outstandUpperCards={outstandUpperCards}
          outstandInfocard={outstandInfocard}
          outstandLowerCards={outstandLowerCards}
          block={block}
          largeImages={largeImages}
        />
      </div>
    </section>
  );
};
