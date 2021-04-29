import cv2
originalImage = cv2.imread('x.jpg')
im_gray = cv2.cvtColor(originalImage, cv2.COLOR_BGR2GRAY)
(thresh, im_bw) = cv2.threshold(im_gray, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)
cv2.imwrite('x.png', im_bw)