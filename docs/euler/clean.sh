for i in {0..9}
do
  cd ${i}0-${i}9
  for j in {0..9}
  do
    cd $i$j
    rm main.c
    cd ../
  done
  cd ../
done