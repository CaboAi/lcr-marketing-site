import cv2, numpy as np
U='/mnt/user-data/uploads/'
light=['0e8d21f0','35351914','e500a215','c9ad2ce5']
ims=[cv2.imread(U+f+'-image.jpg').astype(np.float32) for f in light]  # BGR
H,W=1350,1080
masks=[]
for k,im in enumerate(ims):
    b,g,r=im[...,0],im[...,1],im[...,2]
    lum=0.299*r+0.587*g+0.114*b
    m=((b-r)>2)|(lum<150)|(((r-b)>62)&(lum<185))
    m=m.astype(np.uint8)
    # phone mockup + pill on slides 3,4
    if k>=2: m[540:1120,395:690]=1
    m=cv2.dilate(m,np.ones((9,9),np.uint8))
    masks.append(m.astype(bool))
stack=np.stack(ims); M=np.stack(masks)
w=(~M).astype(np.float32)[...,None]
cnt=w.sum(0)
out=(stack*w).sum(0)/np.maximum(cnt,1)
hole=(cnt[...,0]==0).astype(np.uint8)
# frame lines: same in all slides -> mask bands and inpaint
fr=np.zeros((H,W),np.uint8)
for x in (40,52,1027,1039):
    fr[:,max(0,x-4):x+5]=1
for y in (40,52,1297,1309):
    fr[max(0,y-4):y+5,:]=1
hole=np.maximum(hole,fr)
print('hole %', hole.mean()*100)
out=cv2.inpaint(np.clip(out,0,255).astype(np.uint8),hole,7,cv2.INPAINT_TELEA)
cv2.imwrite('bg/arch_light_recon.jpg',out,[cv2.IMWRITE_JPEG_QUALITY,95])
cv2.imwrite('bg/hole.png',hole*255)
