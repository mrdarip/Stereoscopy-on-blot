# Stereoscopy on Blot
This is my exercise to learn to use [Blot](https://blot.hackclub.com/) and one of my first 3D rendering projects too!

preview it at <https://blot.hackclub.com/editor?shareId=f3210228-5735-42f7-955c-056d849e2a43>

## So, The Idea

What I have in mind is:
- Given an array of 3D vectors, representing vertices and other array of integers pairs representing edges, I can store a "mesh" ([like an .obj file](https://en.wikipedia.org/wiki/Wavefront_.obj_file#File_format))
- Now that I have that mesh, I can feed a fuction 3Dto2D(Vec3) with each vertex and then draw all edges
- I should [draw the model 2 times](https://en.wikipedia.org/wiki/Stereoscopy), one for the right eye, other for the left, applying an offset to each one

## It's easier said than done, so, how do I convert a 3D point to its 2D projection?

There is [many ways](https://en.wikipedia.org/wiki/3D_projection#/media/File:Comparison_of_graphical_projections.svg) to convert a 3D point to 2D, the easier would be an Isometric projection, but as [I want to get a feeling of deph](https://en.wikipedia.org/wiki/3D_projection#Limitations_of_parallel_projection) for the stereoscopy, I'll stick to a projection with perspective, a 2-point projection.

I'll follow [this](https://pomax.github.io/three-point-perspective/) tutorial as it gives a great explanation for how to get a 2-point perspective projection.

## After finishing my project this is how it looked like

![stereoscopyPreview](https://github.com/hackclub/blot/assets/61890952/647b0de3-39ab-4f42-a631-16203adb9b44)  
It works pretty much like an [autostereogram](https://en.wikipedia.org/wiki/Autostereogram), you have to cross you eyes

## [Pull Request](https://github.com/hackclub/blot/pull/640)
