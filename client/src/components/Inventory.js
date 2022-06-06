import { Cancel } from '@material-ui/icons'
import images from 'images'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const { Box, Tooltip, Typography, IconButton } = require('@material-ui/core')

const ItemTypes = {
  body: 'body',
  head: 'head',
  boots: 'boots',
  weapon: 'weapon',
  shield: 'shield',
  none: 'none',
}

const InventorySlot = ({ setItemToSlot, slots, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [...Object.values(ItemTypes)],
      drop: ({ item, slot }) => setItemToSlot(item, slot, slots, true),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [slots]
  )

  return (
    <Box
      ref={drop}
      sx={{
        ...(canDrop && { backgroundColor: 'yellow' }),
        ...(canDrop && isOver && { backgroundColor: 'green' }),
      }}
    >
      {children}
    </Box>
  )
}

const SlotCell = ({ slot, setItemToSlot, slots, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes[slot],
      drop: ({ item, slot }) => setItemToSlot(item, slot, slots),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [slots]
  )

  return (
    <Box
      ref={drop}
      sx={{
        width: 75,
        height: 75,
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(canDrop && { backgroundColor: 'yellow' }),
        ...(canDrop && isOver && { backgroundColor: 'green' }),
      }}
    >
      {children || 'Empty'}
    </Box>
  )
}

const ItemCell = ({ slot = 'none', setViewedItem, item }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes[slot],
      item: { item, slot },
      canDrag: () => item !== null,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [item]
  )

  return (
    <Box
      ref={drag}
      sx={{
        width: 75,
        height: 75,
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(isDragging && { backgroundColor: 'blue' }),
      }}
    >
      {item && (
        <Box
          onClick={() => setViewedItem(item)}
          component={'img'}
          src={item.src}
          sx={{
            maxWidth: 75,
            maxHeight: 75,
            padding: 1,
            cursor: 'pointer',
          }}
        />
      )}
    </Box>
  )
}

const items = [
  { id: 1, src: images.Armor1, name: 'Armor 1', type: 'body' },
  { id: 2, src: images.Helmet1, name: 'Helmet 1', type: 'head' },
  { id: 3, src: images.Helmet2, name: 'Helmet 2', type: 'head' },
  { id: 4, src: images.Boots1, name: 'Boots 1', type: 'boots' },
  { id: 5, src: images.Boots2, name: 'Boots 2', type: 'boots' },
  { id: 6, src: images.Sword1, name: 'Sword 1', type: 'weapon' },
]

const addCells = (length, row = 4, extraRows = 1) => {
  let cells = 0
  while ((length + cells) % row !== 0) {
    cells++
  }
  return cells + row * extraRows
}

const Inventory = () => {
  const [inv, setInv] = useState(items)
  const [slots, setSlots] = useState({
    head: null,
    body: null,
    boots: null,
    weapon: null,
    shield: null,
  })

  const [viewedItem, setViewedItem] = useState(null)

  const cells = useMemo(() => {
    return new Array(inv.length + addCells(inv.length, 4, 0))
      .fill(null)
      .map((el, i) => (inv?.[i] ? inv[i] : el))
  }, [inv])

  useEffect(() => {
    // console.log(slots)
  }, [slots])

  const setItemToSlot = useCallback(
    (item, slot, givenSlots, isInv) => {
      const currentSlots = givenSlots || slots
      const invInclude = inv.map((el) => el.id).includes(item.id)
      if (isInv && invInclude) {
        if (invInclude) return
        else {
          setInv([...inv, item])
          setSlots({ ...currentSlots, [slot]: null })
          return
        }
      }
      if (slot && item) {
        if (!currentSlots[slot]) {
          setInv(inv.filter((el) => el.id !== item.id))
          setSlots({ ...currentSlots, [slot]: item })
        } else if (currentSlots[slot].id === item.id) {
          setInv([...inv, item])
          setSlots({ ...currentSlots, [slot]: null })
        } else {
          setInv([...inv.filter((el) => el.id !== item.id), currentSlots[slot]])
          setSlots({ ...currentSlots, [slot]: item })
        }
      }
    },
    [slots, inv]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          backgroundColor: 'gray',
          mt: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            sx={{
              width: 300,
              height: 300,
              border: '1px solid white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SlotCell
              slots={slots}
              slot={'weapon'}
              setItemToSlot={setItemToSlot}
            >
              {slots.weapon && (
                <ItemCell
                  setViewedItem={setViewedItem}
                  item={slots.weapon}
                  slot={ItemTypes.weapon}
                />
              )}
            </SlotCell>
            <Box sx={{ m: 1 }}>
              <SlotCell
                slots={slots}
                slot={'head'}
                setItemToSlot={setItemToSlot}
              >
                {slots.head && (
                  <ItemCell
                    setViewedItem={setViewedItem}
                    item={slots.head}
                    slot={ItemTypes.head}
                  />
                )}
              </SlotCell>
              <SlotCell
                slots={slots}
                slot={'body'}
                setItemToSlot={setItemToSlot}
              >
                {slots.body && (
                  <ItemCell
                    setViewedItem={setViewedItem}
                    item={slots.body}
                    slot={ItemTypes.body}
                  />
                )}
              </SlotCell>
              <SlotCell
                slots={slots}
                slot={'boots'}
                setItemToSlot={setItemToSlot}
              >
                {slots.boots && (
                  <ItemCell
                    setViewedItem={setViewedItem}
                    item={slots.boots}
                    slot={ItemTypes.boots}
                  />
                )}
              </SlotCell>
            </Box>
            <SlotCell
              slots={slots}
              slot={'shield'}
              setItemToSlot={setItemToSlot}
            >
              {slots.shield && (
                <ItemCell
                  setViewedItem={setViewedItem}
                  item={slots.shield}
                  slot={ItemTypes.shield}
                />
              )}
            </SlotCell>
          </Box>

          {viewedItem && (
            <Box
              sx={{
                width: 200,
                height: 300,
                border: '1px solid white',
                padding: 2,
                position: 'relative',
              }}
            >
              <IconButton
                sx={{ position: 'absolute', top: 1, right: 1 }}
                onClick={() => setViewedItem(null)}
              >
                <Cancel />
              </IconButton>
              <Box
                component={'img'}
                src={viewedItem.src}
                sx={{
                  maxWidth: 75,
                  maxHeight: 75,
                  padding: 1,
                  cursor: 'pointer',
                }}
              />
              {Object.keys(viewedItem).map((key) =>
                key === 'src' ? null : (
                  <Typography>
                    {key}: {viewedItem[key]}
                  </Typography>
                )
              )}
            </Box>
          )}
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: 300 }}>
          {cells.map((el) => (
            <InventorySlot setItemToSlot={setItemToSlot} slots={slots}>
              <ItemCell
                item={el}
                slot={el?.type || 'none'}
                setViewedItem={setViewedItem}
              />
            </InventorySlot>
          ))}
        </Box>
      </Box>
    </DndProvider>
  )
}

export default Inventory
