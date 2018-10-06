var N = null;var searchIndex = {};
searchIndex["owning_ref"]={"doc":"An owning reference.","items":[[8,"StableAddress","owning_ref","An unsafe marker trait for types that deref to a stable address, even when moved. For example, this is implemented by Box, Vec, Rc, Arc and String, among others. Even when a Box is moved, the underlying storage remains at a fixed location.",N,N],[8,"CloneStableAddress","","An unsafe marker trait for types where clones deref to the same address. This has all the requirements of StableDeref, and additionally requires that after calling clone(), both the old and new value deref to the same address. For example, Rc and Arc implement CloneStableDeref, but Box and Vec do not.",N,N],[3,"OwningRef","","An owning reference.",N,N],[3,"OwningRefMut","","An mutable owning reference.",N,N],[3,"OwningHandle","","`OwningHandle` is a complement to `OwningRef`. Where `OwningRef` allows consumers to pass around an owned object and a dependent reference, `OwningHandle` contains an owned object and a dependent object.",N,N],[6,"BoxRef","","Typedef of a owning reference that uses a `Box` as the owner.",N,N],[6,"VecRef","","Typedef of a owning reference that uses a `Vec` as the owner.",N,N],[6,"StringRef","","Typedef of a owning reference that uses a `String` as the owner.",N,N],[6,"RcRef","","Typedef of a owning reference that uses a `Rc` as the owner.",N,N],[6,"ArcRef","","Typedef of a owning reference that uses a `Arc` as the owner.",N,N],[6,"RefRef","","Typedef of a owning reference that uses a `Ref` as the owner.",N,N],[6,"RefMutRef","","Typedef of a owning reference that uses a `RefMut` as the owner.",N,N],[6,"MutexGuardRef","","Typedef of a owning reference that uses a `MutexGuard` as the owner.",N,N],[6,"RwLockReadGuardRef","","Typedef of a owning reference that uses a `RwLockReadGuard` as the owner.",N,N],[6,"RwLockWriteGuardRef","","Typedef of a owning reference that uses a `RwLockWriteGuard` as the owner.",N,N],[6,"BoxRefMut","","Typedef of a mutable owning reference that uses a `Box` as the owner.",N,N],[6,"VecRefMut","","Typedef of a mutable owning reference that uses a `Vec` as the owner.",N,N],[6,"StringRefMut","","Typedef of a mutable owning reference that uses a `String` as the owner.",N,N],[6,"RefMutRefMut","","Typedef of a mutable owning reference that uses a `RefMut` as the owner.",N,N],[6,"MutexGuardRefMut","","Typedef of a mutable owning reference that uses a `MutexGuard` as the owner.",N,N],[6,"RwLockWriteGuardRefMut","","Typedef of a mutable owning reference that uses a `RwLockWriteGuard` as the owner.",N,N],[6,"ErasedBoxRef","","Typedef of a owning reference that uses an erased `Box` as the owner.",N,N],[6,"ErasedRcRef","","Typedef of a owning reference that uses an erased `Rc` as the owner.",N,N],[6,"ErasedArcRef","","Typedef of a owning reference that uses an erased `Arc` as the owner.",N,N],[6,"ErasedBoxRefMut","","Typedef of a mutable owning reference that uses an erased `Box` as the owner.",N,N],[8,"Erased","","Helper trait for an erased concrete type an owner dereferences to. This is used in form of a trait object for keeping something around to (virtually) call the destructor.",N,N],[8,"IntoErased","","Helper trait for erasing the concrete type of what an owner derferences to, for example `Box<T> -> Box<Erased>`. This would be unneeded with higher kinded types support in the language.",N,N],[16,"Erased","","Owner with the dereference type substituted to `Erased`.",0,N],[10,"into_erased","","Perform the type erasure.",0,N],[8,"ToHandle","","Trait to implement the conversion of owner to handle for common types.",N,N],[16,"Handle","","The type of handle to be encapsulated by the OwningHandle.",1,N],[10,"to_handle","","Given an appropriately-long-lived pointer to ourselves, create a handle to be encapsulated by the `OwningHandle`.",1,N],[8,"ToHandleMut","","Trait to implement the conversion of owner to mutable handle for common types.",N,N],[16,"HandleMut","","The type of handle to be encapsulated by the OwningHandle.",2,N],[10,"to_handle_mut","","Given an appropriately-long-lived pointer to ourselves, create a mutable handle to be encapsulated by the `OwningHandle`.",2,N],[11,"new","","Creates a new owning reference from a owner initialized to the direct dereference of it.",3,[[["o"]],["self"]]],[11,"new_assert_stable_address","","Like `new`, but doesn’t require `O` to implement the `StableAddress` trait. Instead, the caller is responsible to make the same promises as implementing the trait.",3,[[["o"]],["self"]]],[11,"map","","Converts `self` into a new owning reference that points at something reachable from the previous one.",3,[[["self"],["f"]],["owningref"]]],[11,"try_map","","Tries to convert `self` into a new owning reference that points at something reachable from the previous one.",3,[[["self"],["f"]],["result",["owningref"]]]],[11,"map_owner","","Converts `self` into a new owning reference with a different owner type.",3,[[["self"],["f"]],["owningref"]]],[11,"map_owner_box","","Converts `self` into a new owning reference where the owner is wrapped in an additional `Box<O>`.",3,[[["self"]],["owningref",["box"]]]],[11,"erase_owner","","Erases the concrete base type of the owner with a trait object.",3,[[["self"]],["owningref"]]],[11,"as_owner","","A reference to the underlying owner.",3,[[["self"]],["o"]]],[11,"into_owner","","Discards the reference and retrieves the owner.",3,[[["self"]],["o"]]],[11,"new","","Creates a new owning reference from a owner initialized to the direct dereference of it.",4,[[["o"]],["self"]]],[11,"new_assert_stable_address","","Like `new`, but doesn’t require `O` to implement the `StableAddress` trait. Instead, the caller is responsible to make the same promises as implementing the trait.",4,[[["o"]],["self"]]],[11,"map","","Converts `self` into a new shared owning reference that points at something reachable from the previous one.",4,[[["self"],["f"]],["owningref"]]],[11,"map_mut","","Converts `self` into a new mutable owning reference that points at something reachable from the previous one.",4,[[["self"],["f"]],["owningrefmut"]]],[11,"try_map","","Tries to convert `self` into a new shared owning reference that points at something reachable from the previous one.",4,[[["self"],["f"]],["result",["owningref"]]]],[11,"try_map_mut","","Tries to convert `self` into a new mutable owning reference that points at something reachable from the previous one.",4,[[["self"],["f"]],["result",["owningrefmut"]]]],[11,"map_owner","","Converts `self` into a new owning reference with a different owner type.",4,[[["self"],["f"]],["owningrefmut"]]],[11,"map_owner_box","","Converts `self` into a new owning reference where the owner is wrapped in an additional `Box<O>`.",4,[[["self"]],["owningrefmut",["box"]]]],[11,"erase_owner","","Erases the concrete base type of the owner with a trait object.",4,[[["self"]],["owningrefmut"]]],[11,"as_owner","","A reference to the underlying owner.",4,[[["self"]],["o"]]],[11,"as_owner_mut","","A mutable reference to the underlying owner.",4,[[["self"]],["o"]]],[11,"into_owner","","Discards the reference and retrieves the owner.",4,[[["self"]],["o"]]],[11,"deref","","",5,N],[11,"deref_mut","","",5,N],[11,"new","","Create a new `OwningHandle` for a type that implements `ToHandle`. For types that don't implement `ToHandle`, callers may invoke `new_with_fn`, which accepts a callback to perform the conversion.",5,[[["o"]],["self"]]],[11,"new_mut","","Create a new mutable `OwningHandle` for a type that implements `ToHandleMut`.",5,[[["o"]],["self"]]],[11,"new_with_fn","","Create a new OwningHandle. The provided callback will be invoked with a pointer to the object owned by `o`, and the returned value is stored as the object to which this `OwningHandle` will forward `Deref` and `DerefMut`.",5,[[["o"],["f"]],["self"]]],[11,"try_new","","Create a new OwningHandle. The provided callback will be invoked with a pointer to the object owned by `o`, and the returned value is stored as the object to which this `OwningHandle` will forward `Deref` and `DerefMut`.",5,[[["o"],["f"]],["result"]]],[11,"as_owner","","A getter for the underlying owner.",5,[[["self"]],["o"]]],[11,"into_owner","","Discards the dependent object and returns the owner.",5,[[["self"]],["o"]]],[11,"deref","","",3,[[["self"]],["t"]]],[11,"deref","","",4,[[["self"]],["t"]]],[11,"deref_mut","","",4,[[["self"]],["t"]]],[11,"as_ref","","",3,[[["self"]],["t"]]],[11,"as_ref","","",4,[[["self"]],["t"]]],[11,"as_mut","","",4,[[["self"]],["t"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"from","","",3,[[["o"]],["self"]]],[11,"from","","",4,[[["o"]],["self"]]],[11,"from","","",3,[[["owningrefmut"]],["self"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result",["error"]]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result",["error"]]]],[11,"clone","","",3,[[["self"]],["self"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result",["error"]]]],[11,"eq","","",3,[[["self"],["self"]],["bool"]]],[11,"partial_cmp","","",3,[[["self"],["self"]],["option",["ordering"]]]],[11,"cmp","","",3,[[["self"],["self"]],["ordering"]]],[11,"hash","","",3,[[["self"],["h"]]]],[11,"eq","","",4,[[["self"],["self"]],["bool"]]],[11,"partial_cmp","","",4,[[["self"],["self"]],["option",["ordering"]]]],[11,"cmp","","",4,[[["self"],["self"]],["ordering"]]],[11,"hash","","",4,[[["self"],["h"]]]]],"paths":[[8,"IntoErased"],[8,"ToHandle"],[8,"ToHandleMut"],[3,"OwningRef"],[3,"OwningRefMut"],[3,"OwningHandle"],[8,"Erased"]]};
searchIndex["stable_deref_trait"]={"doc":"This module defines an unsafe marker trait, StableDeref, for container types that deref to a fixed address which is valid even when the containing type is moved. For example, Box, Vec, Rc, Arc and String implement this trait. Additionally, it defines CloneStableDeref for types like Rc where clones deref to the same address.","items":[[8,"StableDeref","stable_deref_trait","An unsafe marker trait for types that deref to a stable address, even when moved. For example, this is implemented by Box, Vec, Rc, Arc and String, among others. Even when a Box is moved, the underlying storage remains at a fixed location.",N,N],[8,"CloneStableDeref","","An unsafe marker trait for types where clones deref to the same address. This has all the requirements of StableDeref, and additionally requires that after calling clone(), both the old and new value deref to the same address. For example, Rc and Arc implement CloneStableDeref, but Box and Vec do not.",N,N]],"paths":[]};
initSearch(searchIndex);
