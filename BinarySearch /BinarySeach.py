# find in a sorted array the target number, if target not present return the nearest number
# example : [1,2,6,7,8] Target = 3   return 2

def find_nearest (arr, target){
    l, r = 0, len(arr)-1
    while l + 1 < r:
        mid = l + (r-1) // 2
        if arr[mid] < target:
        l = mid
        else: 
            r = mid
    
    if abs(target - arr[l]) <= abs(target - arr[r]):
    return l
    else:
    return r 
}