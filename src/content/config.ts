import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string()
  })
})

export const collections = {
 'blog': blogCollection
}