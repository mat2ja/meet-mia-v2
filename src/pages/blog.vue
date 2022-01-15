<script setup>
const blogPosts = [
  {
    title: '',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, maxime! Quidem libero ullam, suscipit nihil iusto dicta, vitae ex illo autem, deleniti odit dolore? Deserunt reiciendis recusandae eos adipisci facilis! Lorem ipsum dolor sit amet',
    imageUrl: 'sendvici.jpg',
    id: 1,
    ts: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
  },
];
</script>

<template>
  <div class="blog-page blog">
    <div class="row">
      <h1 class="blog__title">Blog</h1>
      <div>
        <div class="blog__posts">
          <div v-for="i in 4" :key="i" class="blog__post blog-post">
            <div class="blog-post__image">
              <img src="/images/sendvici.jpg" alt="" />
            </div>
            <div class="blog-post__content">
              <h3 class="blog-post__content-title">Novi prašak za pecivo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                maxime! Quidem libero ullam, suscipit nihil iusto dicta, vitae
                ex illo autem, deleniti odit dolore? Deserunt reiciendis
                recusandae eos adipisci facilis! Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-page {
  padding: 1rem 0 6rem;
  flex: 1;

  background-image: url('/src/assets/wave-haikei-brown.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateY(4px);
}

.blog {
  &__title {
    font-size: var(--text-6xl);
    margin-bottom: 2.5rem;

    @media only screen and (max-width: 800px) {
      font-size: var(--text-5xl);
    }

    @media only screen and (max-width: 600px) {
      font-size: var(--text-4xl);
    }
  }

  &__posts {
    padding-bottom: 8rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    gap: 2rem;
  }
}

.blog-post {
  display: flex;
  border: 3px dashed var(--burg-500-opaque);
  background: var(--peach-100);
  box-shadow: var(--box-shadow-peach);
  border-radius: var(--border-radius-lg);
  // overflow: hidden;
  max-height: 400px;

  &:nth-child(2n) {
    .blog-post__image {
      order: 2;
    }
  }

  &__image {
    flex-shrink: 0;
    max-width: 320px;
    height: 100%;
    flex: 2;
    transform-origin: center;
    transform: scale(1.08);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--box-shadow-peach);
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  img {
    display: block;
    aspect-ratio: 5 / 3;
    object-fit: cover;
    object-position: center;
    height: 100%;
    transform: scale(1);

    transition: all 500ms ease;
  }

  &__content {
    padding: 2rem;
    padding-left: 2.5rem;
    flex: 3;

    &-title {
      font-size: var(--text-3xl);
      margin-bottom: 1.5rem;
    }

    p {
    }
  }
}
</style>
