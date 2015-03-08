---
---

# Shuffle child elements
$.fn.shuffleChildren = ->
  childElements = @children().get()
  @empty()
  for child in _.shuffle(childElements)
    @append(child)

$ ->
  # Shuffle logos in each sponsor lists.
  for sponsorList in $(".sponsor-logo ul")
    $(sponsorList).shuffleChildren()
  # Show entire sponsor lists
  $(".sponsor-logo").show()
