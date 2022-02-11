import cv2
originalImage = cv2.imread('x.png')
newImage = cv2.fastNlMeansDenoisingColored(originalImage, None, 16, 10, 7, 21)
cv2.imwrite('x2.png', newImage)