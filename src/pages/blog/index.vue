<script setup>
import { useBlog } from '@/stores/blog.js';

const blogStore = useBlog();

const blogPosts = blogStore.posts;

const formatDate = (ts) => {
  return ts.toLocaleDateString('hr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="blog-page blog">
    <div class="row">
      <h1 class="blog__title">Blog</h1>
      <div>
        <div class="blog__posts">
          <div
            v-for="post in blogPosts"
            :key="post.id"
            class="blog__post blog-post"
          >
            <div class="blog-post__image">
              <img :src="`/images/${post.imageUrl}`" alt="" />
            </div>
            <RouterLink :to="`/blog/post/${post.id}`" class="blog-post__link">
              <div class="blog-post__content">
                <div class="blog-post__head">
                  <p class="blog-post__date">{{ formatDate(post.ts) }}</p>
                  <h3 class="blog-post__content-title">{{ post.title }}</h3>
                </div>
                <p class="blog-post__text">
                  {{ post.text }}
                </p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-page {
  padding: 2.5rem 0 6rem;
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

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
}

.blog-post {
  display: flex;
  border: 3px dashed var(--burg-500-opaque);
  background: var(--peach-100);
  box-shadow: var(--box-shadow-peach);
  border-radius: var(--border-radius-lg);

  transition: all 250ms ease-out;
  min-height: 250px;

  @media only screen and (max-width: 800px) {
    min-height: auto;
    display: flex;

    position: relative;
  }

  &:nth-child(2n) {
    .blog-post {
      &__image {
        order: 2;
      }

      &__head {
        align-items: flex-end;

        @media only screen and (max-width: 800px) {
          align-items: flex-start;
        }
      }

      &__content {
        text-align: right;

        @media only screen and (max-width: 800px) {
          text-align: left;
        }
      }

      &__image {
      }
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

    @media only screen and (max-width: 800px) {
      transform: scale(1);
      order: 2;
      max-width: 250px;

      flex: 1;
      width: 100%;

      display: none;

      img {
        object-fit: cover;
      }
    }

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

    @media screen and (max-width: 800px) {
      aspect-ratio: unset;
    }
  }

  &__link {
    cursor: pointer;
    display: block;
    height: 100%;
    transition: all 250ms ease-out;

    text-align: left;
    flex: 3;

    &:hover {
      background: var(--peach-200);
    }

    @media screen and (max-width: 800px) {
      flex: 1;
    }
  }

  &__content {
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;

    height: 100%;

    @media only screen and (max-width: 800px) {
      font-size: var(--text-sm);
      padding: 1rem 1.5rem;
    }

    &-title {
      font-size: var(--text-3xl);
      margin-bottom: 1.5rem;

      @media only screen and (max-width: 800px) {
        font-size: var(--text-xl);
      }
    }
  }

  &__head {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__text {
    margin-bottom: 1rem;
  }

  &__date {
    color: var(--burg-500);
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
}
</style>
