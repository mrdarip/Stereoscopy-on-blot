# Stereoscopy on Blot
This is my exercise to learn to use Blot and one of my first 3D rendering projects too!

## So, The Idea

What I have in mind is:
- Given an array of 3D vectors, representing vertices and other array of integers pairs representing edges, I can store a "mesh" (like an .obj file)
- Now that I have that mesh, I can feed a fuction 3Dto2D(Vec3) with each vertex and then draw all edges
- I should draw the model 2 times, one for the right eye, other for the left, applying an offset to each one

## It's easier said than done, so, how do I convert a 3D point to its 2D projection?

There is many ways to convert a 3D point to 2D, the easier would be an Isometric projection, but as I want to get a feeling of deph for the stereoscopy, I'll stick to a projection with perspective, a 2-point projection.