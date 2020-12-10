import React from 'react';
import styles from './project.module.css';

const Project = (props) => {
  return (
    <div className={styles.container} id='p'>
      <h1 className={styles.title}>Project</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <a
            href='https://hackorkr.github.io/React-youtube-refactoring/'
            target='_blank'
          >
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + '/images/project_youtube.png'}
            />
          </a>
          <div className={styles.info}>
            <h2 className={styles.project_title}>클론 유튜브</h2>
            <h3 className={styles.project_period}>개발기간: 2020~2021</h3>
            <p className={styles.project_description}>Skill: React, PostCss</p>
            <p className={styles.project_description}>
              <ul>
                <li>Youtube API를 활용해서 인기 차트 카테고리화</li>
                <li>반응형 웹으로 구현</li>
                <li>SPA로 제작</li>
              </ul>
            </p>
            <p className={styles.github_address}>
              Github 주소 <br />
            </p>
            <a
              target='_blank'
              href='https://github.com/hackorKR/React-youtube-refactoring'
              className={styles.project_url}
            >
              https://github.com/hackorKR/React-youtube-refactoring
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <a
            href='https://5fced43ba0c1ab008d905e3a--hackor-card.netlify.app/'
            target='_blank'
          >
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + '/images/project_card.png'}
            />
          </a>
          <div className={styles.info}>
            <h2 className={styles.project_title}>비즈니스 카드 관리 앱</h2>
            <h3 className={styles.project_period}>개발기간: 2020~2021</h3>
            <p className={styles.project_description}>
              <ul>
                <li>구글, 깃헙 로그인 기능 구현</li>
                <li>실시간 반응형 웹, 백엔드 연결</li>
                <li>이미지 Cloudinary로 업로드 구현</li>
              </ul>
            </p>
            <p className={styles.github_address}>
              Github 주소 <br />
            </p>
            <a
              target='_blank'
              href='https://github.com/hackorKR/React-card-maker'
              className={styles.project_url}
            >
              https://github.com/hackorKR/React-card-maker
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <img
            className={styles.img}
            src={process.env.PUBLIC_URL + '/images/project_arena.png'}
          />
          <div className={styles.info}>
            <h2 className={styles.project_title}>카카오 아레나 대회</h2>
            <h3 className={styles.project_period}>개발기간: 2020~2021</h3>
            <p className={styles.project_description}>
              <ul>
                <li>
                  Word2Vec알고리즘으로 곡과 태그를 예측하는 코드 작성(기여도
                  100%)
                </li>
                <li>
                  FastText알고리즘으로 한국어 자연어처리를 하여 곡과 태그를
                  예측하는 코드 작성(기여도 100%)
                </li>
                <li>Pandas로 데이터 분석과 구조화(기여도 50%)</li>
              </ul>
            </p>
            <p className={styles.github_address}>
              Github 주소 <br />
            </p>
            <a
              target='_blank'
              href='https://github.com/hackorKR/Python-kakaoarena'
              className={styles.project_url}
            >
              https://github.com/hackorKR/Python-kakaoarena
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
