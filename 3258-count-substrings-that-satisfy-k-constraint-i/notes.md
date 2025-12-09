# Notes

When using the sliding window to check for substrings, you're not actually generating the substrings. You're just checking if the window is valid. If the window is valid, you can increase the window and check again, but if it's not valid, you can shrink the window and check again. Shrinking the window does not cause invalid substrings, only adding substrings can pose a conflict. 